class AuthenticateUser
   prepend SimpleCommand

    def initialize(username, password)
       @username = username
       @password = password
    end

    def call
      if user
        auth_token = JsonWebToken::encode(user_id: user.id)
        return ({ auth_token: auth_token, user_id: user.id})
      end
    end

    private

    attr_accessor :username, :password


    def user
      user = User.find_by_username(username)
      return user if user && user.authenticate(password)

      errors.add :user_authentication, 'invalid credentials'
      nil
    end
end
