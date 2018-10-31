class Review < ApplicationRecord
  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :listing

  validate :date

  def date
    Time.now.strftime('%B %Y')
  end
end
