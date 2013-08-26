class User
  include Mongoid::Document
  field :FirstName, type: String
  field :LastName, type: String
  field :email, type: String
  
end
