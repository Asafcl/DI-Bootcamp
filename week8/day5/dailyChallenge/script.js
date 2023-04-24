function isAnagram(str1, str2){
    str1 = str1.replace(/\s+/g, '').toLowerCase()
    str2 = str2.replace(/\s+/g, '').toLowerCase()


const arr1 = str1.split('')
const arr2 = str2.split('')


arr1.sort()
arr2.sort()

const sortedStr1 =arr1.join('')
const sortedStr2 = arr2.join('')

return sortedStr1 === sortedStr2
}


const compare = document.getElementById('compare')


      compare.addEventListener('click', () => {
const str1 = document.getElementById('palabra1').value
const str2 = document.getElementById('palabra2').value
if(isAnagram(str1,str2)){
    demo.textContent = str1 + ' '+ str2 +'  are anagram'
    }else{
        demo.textContent =  str1 + ' '+ str2 +'  are not anagram'
    }
})

//const str1 = 'Astronomer' //School master, Here come dots, Hello
//const str2 = 'Moon Starer' //The classroom // The Morse Code //World


const demo = document.getElementById('demo')

