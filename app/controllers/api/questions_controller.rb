class QuestionsController < ApplicationController
    before_action :require_logged_in
    before_action :require_current_users_question, only: [:update, :destroy, :create, :show, :index]

    def index
        @questions = Question.all
        render 'api/questions'
    end


    def create
        @question = Question.new(question_params)
        if @question.save
            render 'api/questions'
        else
            render json: @question.errors.full_messages
        end
    end

    def show
        @question = Question.find(params[:id])
        render 'api/questions/show'
    end

    def update
        @question = Question.find(params[:id])
        if @question.update(question_params)
            render 'api/questions/show'
        else
            render json: @question.errors.full_messages
        end
    end

    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        render 'api/questions'
    end

    private

    def question_params
        params.require(:question).permit(:title, :body, :topic, :author_id)
    end

    def require_current_users_question
        return if current_user.questions.find_by(id: params[:id])
        render json: ["This is not your question"]
    end


end
