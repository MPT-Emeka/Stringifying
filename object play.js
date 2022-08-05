const sasukeBio = {
    name: "Uchiha Sasuke",
    age: 29,
    workDetails: ["he is a shinobi", "Kage level", 231, 560],
    katonJutsu: ["Gyoukachu no jutsu", " Housenka no jutsu", 
    " Enton Kagutsuchi", " Inferno style", " Ryuuka no jutsu"],
    chidoriJutsu: ["Chidori nagashi", " Chidori Eisou", " Chidori Senbon", " Black Chidori"],
    jutsu: function (){
        let mangekyou = true
        if(mangekyou){
            return 'He activated the mangekyou Sharingan'
        }
        else{
            return "He has the 3 tomoe sharingan" 
        }
    },
    description: function() {
        return (`${this.name} is ${this.age} years of age, ${this.workDetails[0]}, who has the rank of ${this.workDetails[1]}
    he has completed ${this.workDetails[2]} B rank missions and ${this.workDetails[3]} A rank missions. His fire/katon techniques 
    includes the following: ${this.katonJutsu}, while his Lightening/Chidori techniques includes the following: ${this.chidoriJutsu}.
       After killing his brother Itachi, `)
    }
}
console.log(sasukeBio.description() + sasukeBio.jutsu())
