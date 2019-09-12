# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

gifts =
         [{title: "Diptyque Baies Scented Candle (6.5oz)", price: 65, description: "What it is: An irresistibly fresh and fruity scented candle that warms your heart and home.", link: "https://shop.nordstrom.com/s/diptyque-baies-berries-scented-candle/3227984", image: "https://n.nordstrommedia.com/id/sr3/868a2e09-6ce0-493b-b406-06f711edadfe.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=1660&h=2546", category:"Candle"},
         {title: "Apple AirPods with Wireless Charging Case", price: 199, description: "The new AirPods — complete with Wireless Charging Case — deliver the wireless headphone experience, reimagined. Just pull them out of the case and they’re ready to use with your iPhone, Apple Watch, iPad, or Mac.", link: "https://www.apple.com/shop/product/MRXJ2/airpods-with-wireless-charging-case", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRXJ2?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489675083", category:"Tech"},
         {title: "Postcards from the New Yorker", price: 23.88, description: "Postcards of the New Yorker's striking and sometimes controversial covers from such artists as Peter Arno, William Steig, Saul Steinberg, Jean-Jacques Sempé, and Art Spiegelman.", link: "https://www.amazon.com/Postcards-New-Yorker-Hundred-Decades/dp/1846144698/ref=asc_df_1846144698/?tag=hyprod-20&linkCode=df0&hvadid=312176357204&hvpos=1o2&hvnetw=g&hvrand=10246754882679800508&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9026929&hvtargid=aud-799146894166:pla-373217954781&psc=1&tag=&ref=&adgrpid=60258871857&hvpone=&hvptwo=&hvadid=312176357204&hvpos=1o2&hvnetw=g&hvrand=10246754882679800508&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9026929&hvtargid=aud-799146894166:pla-373217954781", image: "https://images-na.ssl-images-amazon.com/images/I/81yKExB%2BcOL.jpg", category:"Art & Photography"}]

gifts.each do |gift|
  Gift.create(gift)
end
