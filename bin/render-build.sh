set -o errexit

bundle install
bundle exec rails assets:precompile
bundle exec rails assest:clean
bundle exec rails db:migrate