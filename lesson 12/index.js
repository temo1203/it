let names = ['თემო','საბა','ელენე_1','მარიამი','გიორგი','ელენე_2','ალექსანდრე','მერაბ','ანა','ნატალი','გურამ','სანდრო','გიორგი_1','ავთანდილ','გიორგი_2']
let group = []
function random(){
    // const random = Math.floor(Math.random() * names.length);
    console.log(random, names[random]);
    for (let i = 0; i < 3; i++) {
        group += Math.floor(Math.random() * names[i]);
        console.log(group)
      }
      console.log(group)
}