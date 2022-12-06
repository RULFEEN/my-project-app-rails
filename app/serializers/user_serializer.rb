class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url

  has_many :projects, if: :condition

  def condition
    @instance_options[:flag] != "restrict"
  end
end
