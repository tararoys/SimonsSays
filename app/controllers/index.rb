get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do

  puts params # can totally get params from the server.  
  #Create and return a JSON object with the random cell and color given below.

  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)

  #whoops. misinterpreted the challenge as sending json to the server instead of from the server. Oh well. Moving on! 

end