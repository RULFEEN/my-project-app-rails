class CommentsController < ApplicationController
    wrap_parameters format: []

    def update
        comment = Comment.find(params[:id])
        comment.update(comment_params)
        render json: comment.project
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end

    def create
        comment = Comment.create!(comment_params)
        if comment.valid?
          render json: comment, status: :created
        else
          render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def comment_params
        params.permit(:opinion, :user_id, :project_id)
    end
end
