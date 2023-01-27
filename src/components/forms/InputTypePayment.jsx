import React from "react";

export default function InputTypePayment({
  labelName = "input",
  value,
  ...rest
}) {
  return (
    <div className="w-full space-y-2">
      <label htmlFor={labelName} className="block text-lg text-primary-1">
        {labelName}
      </label>
      <select
        id={labelName}
        label={labelName}
        {...rest}
        className="bg-gray-100 text-primary-1 sm:text-sm border-0 w-full rounded-lg block p-2.5"
      >
        <option value="">Tipe Pembayaran</option>
        <option value="1 minggu">1 Minggu</option>
        <option value="1 bulan">1 Bulan</option>
        <option value="2 bulan">2 Bulan</option>
        <option value="3 bulan">3 Bulan</option>
        <option value="6 bulan">6 Bulan</option>
        <option value="1 tahun">1 Tahun</option>
      </select>
    </div>
  );
}
