var i = 0;

const originalData =  [
        {
            name: "HL Architecture and Construction",
            website: 101,
            code: 202,
            technologies: ["jQuery", "bootstrap"],
            completion: "April 2017"
        },        
        {
            name: "Harry Potter",
            technologies: ["jQuery", "bootstrap"],
            pages: 384
        },
        {
            name: "The Witcher",
            technologies: ["jQuery"],
            pages: 809
        },       
        {
            name: "The Dark Tower",
            technologies: ["jQuery"],
            pages: 1
        }
        ];
        
     function filterArray(filter) {
        const finalArray=[]; 
        originalData.forEach(function(arr) {for(i=0; i<arr.technologies.length; i++)
        {if (arr.technologies[i] === filter ){
        finalArray.push(arr)}} 
        }
        );

        return finalArray
    }

export default function(state={}, action) {
    console.log(action.type);
    switch(action.type){
        case 'FILTERED_ARRAY': console.log(action.payload); 
         var testing = filterArray(action.payload);
        
        return testing;
           default: return originalData;
    }

}


// function test() {var finalArray=[]; x.forEach(function(arr) {for(i=0; i<arr.technologies.length; i++){if (arr.technologies[i] === "jQuery"){finalArray.push(arr.technologies[i])} }});return finalArray}