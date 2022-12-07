class User < ApplicationRecord
    has_secure_password

    has_many :projects
    has_many :comments

    validates :email, uniqueness: true
    validates :username, uniqueness: true
end
