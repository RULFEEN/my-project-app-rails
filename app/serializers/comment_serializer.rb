class CommentSerializer < ActiveModel::Serializer
  attributes :id, :opinion, :user_id, :project_id, :user

  belongs_to :user
end
