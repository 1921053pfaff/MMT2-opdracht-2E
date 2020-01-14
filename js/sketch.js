function setup() {
  // put setup code here
  createCanvas (750, 750)
  background(240)
}

function draw() {
  // put drawing code here

  stroke ("black")
  strokeWeight (5);
  //linksboven zwart
  fill ("black")
  rect(0, 0, 50, 170)

  //bovenin links grijs
  fill ("lightgrey")
  rect(50, 0, 240, 25)

  //onder grijs bovenin links rood
  fill ("red")
  rect (50, 25, 90, 150)

  //onder grijs naast rood bovenin links rood
  fill ("white")
  rect (140, 25, 150, 150)

  //onder zwart bovenin links
  fill ("white")
  rect (0, 170, 50, 300)

  //onder rood en wit linksboven blauw
  fill ("darkblue")
  rect(50, 170, 240, 170)

  //onder blauw links
  fill ("black")
  rect (50, 340, 240, 130)

  //links onder wit
  fill ("lightgrey")
  rect (0, 470, 140, 170)

  // links onder naast grijs rood
  fill ("red")
  rect (140, 470, 150, 230)

  // links onderin in het hoekje wit
  fill ("white")
  rect (0, 640, 140, 100)

  // links onder zwarte streep
  fill ("black")
  rect (140, 700, 340, 40)

  // midden wit 
  fill ("white")
  rect (290, 0, 190, 110)

  // midden onder wit geel
  fill ("yellow")
  rect (290, 100, 190, 70)

  //midden onder geel geel
  fill ("yellow")
  rect (290, 170, 190, 170)

  //midden onder geel wit
  fill ("white")
  rect (290, 340, 190, 160)

  //midden onder wit wit
  fill ("white")
  rect (290, 500, 190, 100)

  //midden onder wit boven zwarte streep
  fill ("darkblue")
  rect(290, 600, 190, 100)

  //naast zwarte streep, grijze streep
  fill ("lightgrey")
  rect (480, 700, 200, 40)

  // naast blauw boven grijze streep geel
  fill ("yellow")
  rect (480, 600, 200, 100)

  //boven geel zwart
  fill ("black")
  rect(480, 340, 200, 260)

  //boven zwart lichtgrijs
  fill ("lightgrey")
  rect (480, 170, 200, 170)

  // boven lichtgrijs blauw
  fill ("darkblue")
  rect (480, 100, 200, 70)

  // lichtgrijs boven blauw
  fill ("lightgrey")
  rect (480, 0, 200, 100)

  fill ("yellow")
  rect (680, 0, 60, 200)

  fill ("red")
  rect (680, 200, 35, 400 )

  fill ("white")
  rect (715, 200, 25, 400)

  fill ("white")
  rect (680, 600, 60, 140)
}