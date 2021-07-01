export class MyClass {
    
    private value: string;

    getValue(): string {
      return this.value;
    }

    setValue (val: string) {
        this.value = val; 
    }
}
