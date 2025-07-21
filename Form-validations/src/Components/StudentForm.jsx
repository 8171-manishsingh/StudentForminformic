import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
  grade: Yup.string().required("Grade is required"),
  gender: Yup.string().required("Gender is required"),
  isVerified: Yup.boolean().oneOf([true], "You must verify the student"),
});

function StudentForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      grade: "",
      gender: "",
      isVerified: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Student Data:", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Student Information Form</h2>

      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div style={{ color: "red" }}>{formik.errors.fullName}</div>
        )}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}
      </div>

      <div>
        <label>Grade:</label>
        <select
          name="grade"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.grade}
        >
          <option value="">-- Select Grade --</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
        {formik.touched.grade && formik.errors.grade && (
          <div style={{ color: "red" }}>{formik.errors.grade}</div>
        )}
      </div>

      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.gender === "Male"}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.gender === "Female"}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.gender === "Other"}
          />
          Other
        </label>
        {formik.touched.gender && formik.errors.gender && (
          <div style={{ color: "red" }}>{formik.errors.gender}</div>
        )}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="isVerified"
            onChange={formik.handleChange}
            onBlur={() => formik.setFieldTouched("isVerified", true)}  // FIXED
            checked={formik.values.isVerified}
          />
          {" "}Is Verified
        </label>
        {formik.touched.isVerified && formik.errors.isVerified && (
          <div style={{ color: "red" }}>{formik.errors.isVerified}</div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
