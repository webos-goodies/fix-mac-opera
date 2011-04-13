# -*- coding: utf-8; mode: ruby -*-

require 'rake/clean'

TARGET = 'fix-mac-opera.oex'

task :default  => TARGET

file TARGET => FileList['src/**/*'] do |t|
  files = t.prerequisites.map{|fname| fname.sub(/^src\//, '') }
  rm_f(t.name)
  Dir.chdir('src') do
    sh("zip ../#{t.name} " + files.join(' '))
  end
end
