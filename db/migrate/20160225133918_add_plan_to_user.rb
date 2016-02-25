class AddPlanToUser < ActiveRecord::Migration
  def change
    add_column :users, :subscription_plan_id, :integer
  end
end
