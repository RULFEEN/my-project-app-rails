class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_id, :image_url

  has_many :comments, if: :condition

  def condition
    @instance_options[:flag] != "restrict"
  end
end
