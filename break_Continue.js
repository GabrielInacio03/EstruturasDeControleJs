//break => não influencia no IF, apenas em switch, for e while
//Continue => influencia no for e while

const nums = [1,2,3,4,5,6,7,8,9,10]

for(n in nums) {
    if(n == 5) break
    console.log(`n  = ${nums[n]}`)
}

console.log('FIM')

for(n in nums){
    if(n == 5) continue
    console.log(`n = ${nums[n]}`)
}

//rotulo
externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3)break externo
        console.log(`Par = ${a}.${b}`)
    }
}