class FavoritesController < ApplicationController
    def new
        favorite = Favorite.new
    end

    def create
        favorite = Favorite.new(favorite_params)
        render json: favorite, except: [:created_at, :updated_at]
    end

    def index
        user_id = params[:user_id]
        user = User.find(user_id)
        favorites = user.favorites
        render json: favorites, include: [:gift]
    end

    def destroy
        favorite.clear
    end


private
    def favorite_params
      params.require(:favorite).permit(:user_id, :gift_id)
    end
end
