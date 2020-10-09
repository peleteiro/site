.DEFAULT_GOAL = dev
.PHONY: *
SHELL := '/bin/bash'

clean:
	@rm -rf .cache public ./yarn-error.log
	@find . -name .DS_Store | xargs rm -f

dev:
	@./node_modules/.bin/gatsby develop

generate:
	@./node_modules/.bin/graphql-codegen --config graphql-codegen.yml

build:
	@NODE_ENV=production ./node_modules/.bin/gatsby build

deploy: build
	@./node_modules/.bin/s3p sync -y
