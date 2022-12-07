class Project < ApplicationRecord

    belongs_to :user
    has_many :comments

    validates :description, length: { minimum: 20 }
end
