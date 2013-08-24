module ApplicationHelper
	def button_text(item)
		item.new_record? ? "Create" : "Update"
	end
end
