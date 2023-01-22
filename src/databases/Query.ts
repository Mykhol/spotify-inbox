import Operator from "@/databases/Operator";

type ObjProps<TObj, TProp extends keyof TObj> = TObj[TProp];

class Query<T> {

  constructor(
    public property: keyof T, public operator: Operator, public value: T[typeof property]
  ) {

  }

}

export default Query;