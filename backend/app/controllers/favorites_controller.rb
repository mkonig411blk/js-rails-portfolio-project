class FavoritesController < ApplicationController
    def new
      favorite = Favorite.new
    end

    def create
        favorite = Favorite.new(favorite_params)
        render json: favorite, except: [:created_at, :updated_at]
    end

private
    def favorite_params
      params.require(:favorite).permit(:user_id, :gift_id)
    end
end
