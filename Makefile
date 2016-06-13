.DEFAULT_GOAL = build
.PHONY: build

clean:
	rm -rf _site

build: clean
	bundle exec jekyll build --config=_config.yml,_config_prod.yml

deploy:
	aws s3 sync _site/ s3://peleteiro.net/ --acl public-read

dev:
	bundle exec guard
