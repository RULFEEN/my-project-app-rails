# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# config/environments/production.rb
config.public_file_server.enabled = ENV['RAILS_SERVE_STATIC_FILES'].present? || ENV['RENDER'].present?
