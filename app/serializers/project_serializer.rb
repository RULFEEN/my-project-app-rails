class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :comments

  has_many :comments, if: :condition
  belongs_to :user

  def condition
    @instance_options[:flag] != "restrict"
  end
end
