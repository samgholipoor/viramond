import * as Yup from "yup";

const searchValidation = Yup.object({
  gender: Yup.string("لطفا از کارکتر استفاده کنید").max(
    30,
    "حداکثر 30 کارکتر میتوانید وارد کنید"
  ),
});

export { searchValidation };
