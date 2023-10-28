import {TypeDiscipline} from "@domain/data/enums/type-discipline";

export class App {

  static ROUTES = {
    TRAINING_ADDITION: TypeDiscipline.ADDITION,
    TRAINING_MULTIPLICATION: TypeDiscipline.MULTIPLICATION,
    TRAINING_DIVISION: TypeDiscipline.DIVISION,
    TRAINING_ROOT: TypeDiscipline.ROOT,
    TRAINING_DATE: TypeDiscipline.CALENDAR_DATE,
  }
}
