class PagesController < ApplicationController
    def home
        @basic_plan = SubscriptionPlan.find(1)
        @pro_plan = SubscriptionPlan.find(2)
    end
    
    def about
    end
end
