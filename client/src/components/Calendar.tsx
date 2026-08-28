import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import type { DateRange } from '@mui/x-date-pickers-pro/models';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

type Props = {
    className?: string;
}
const dateNow = dayjs();
const dateNext = dayjs().add(1,"day");
export default function DateRangePickerValue({className}: Props) {
  const [value, setValue] = React.useState<DateRange<Dayjs>>([
    dayjs(dateNow),
    dayjs(dateNext),
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       
          <DateRangePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
            className={className}
          />
    </LocalizationProvider>
  );
}