require 'tempfile'
require 'digest/md5'
require 'bundler/setup'
require 'digest/md5'
Bundler.require

task :default => :build

task :build do
  system("jekyll build")
end

task :deploy => :build do
  Dir["_site/**/*"].each do |file|
    next if File.directory? file
    upload(file, "peleteironet", file.gsub("_site/", ''))
  end
end

def upload(from_file, bucket, to_file)
  s3 = AWS::S3.new(access_key_id: ENV['AWS_ACCESS_KEY_ID'], secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'])
  bucket = s3.buckets[bucket]
  obj = bucket.objects[to_file]

  md5base64 = Digest::MD5.base64digest(::File.read(from_file))
  md5hex = Digest::MD5.hexdigest(::File.read(from_file))

  File.open(from_file) do |file|
    pb = ProgressBar.create(format: '%e |%b>>%i| %p%% %t', title: "upload", total: file.size)
    obj.write(content_length: file.size, content_md5: md5base64, metadata: {md5: md5hex}) do |buffer, bytes|
      buffer.write(file.read(bytes))
      pb.progress += bytes rescue nil
    end
    pb.finish
  end
end
