class ProjectsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Project.all, status: :ok
    end

    def show
        project = Project.find(params[:id])
        render json: project
    end

    def update
        project = Project.find(params[:id])
        project.update!(project_params)
        render json: project.user
    end

    def create
        project = Project.create(project_params)
        render json: project, status: :created
    end

    def destroy
        project = Project.find(params[:id])
        project.destroy
        head :no_content
    end

    private
    def project_params
        params.permit(:name, :description, :user_id, :image_url)
    end
end
