class UsersController < ApplicationController
    wrap_parameters format: []
    
    def index
        render json: User.all, flag: "restrict", status: :ok
    end

    def show
      user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def update
        user = User.find_by(id: params[:id])
        user.update!(user_params)
        render json: user
    end

    def create
        user = User.create!(user_params)
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end
    
    private
    
    def user_params
        params.permit(:username, :password, :password_confirmation, :image_url, :email)
    end
end
