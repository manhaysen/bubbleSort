interface Sorter<T> {
  Sort:() => T[]
  Unsort:() => T[]
  Revers:() => T[]
}
class BubbleSorter <T> implements Sorter <T> {
private payload:T[]
private transformedPayload:T[]  
constructor(arr:T[]) {
this.payload = arr
this.transformedPayload = [...arr]
}
public get array () {
  return this.transformedPayload
}
Unsort() {
this.transformedPayload = [...this.payload]  
return this.transformedPayload
}
Revers() {
  this.transformedPayload = this.transformedPayload.reverse()
  return this.transformedPayload
}
Sort() {
const arrLength = this.transformedPayload.length
let swapped= false;
for (let i = 0; i < arrLength - 1; i++) {
  for (let j = 0; j < arrLength - 1; j++) {
    if (this.transformedPayload[j] > this.transformedPayload[j + 1] ) {
      const saveItem = this.transformedPayload[j]
      this.transformedPayload[j] = this.transformedPayload[j+1]
      this.transformedPayload[j+1] = saveItem;
      swapped = true
    }
  }
  if(!swapped) {
    break
  }
}
return this.transformedPayload
}

}

