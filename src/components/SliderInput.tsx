import { styled } from "@mui/material/styles";
import { Slider, TextField } from '@mui/material';
 
const marks = [
  {
    value: 0,
    label: '0 GB',
  },
  {
    value: 1000,
    label: '1000 GB',
  },
];

const CustomSlider = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-thumb": {
    width: "25px",
    height: "25px"
  },
  "& .MuiSlider-rail": {
    height: "10px",
  },
  "& .MuiSlider-track": {
    height: "10px",
  },
  "& .MuiSlider-markLabel": {
    color: "#111111",
  },
  "& .MuiSlider-markLabel[data-index='0']": {
    marginLeft: "15px"
  },
  "& .MuiSlider-markLabel[data-index='1']": {
    marginLeft: "-25px"
  }
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    marginLeft: "20px",
    width: "65px"
  },
  "& .MuiFilledInput-input": {
    padding: "5px",
    textAlign: "center",
  },
}));

type Props = {
  handleChangeStorage: (e: any, data: number | number[], storage?: boolean) => void;
  inputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, storage?: boolean) => void;
  storage: number,
  transfer: number,
};

export default function SliderInput({ handleChangeStorage, storage, transfer, inputChange }: Props) {

  return (
    <div className="flex flex-col gap-5 items-center sm:flex-row sm:justify-between sm:gap-20">
      <div className="text-gray-700 font-bold w-3/4 sm:w-1/2">
        <p className="mb-3 text-center text-lg">
          {`Storage: ${storage} GB`}
        </p>
        <div className="flex">
          <CustomSlider 
            value={storage}
            onChange={(e, data) => handleChangeStorage(e, data, true)}
            min={0}
            max={1000}
            size='medium'
            marks={marks}
          />
          <CustomTextField
            type="number"
            value={`${storage}`}
            variant="filled" 
            size="small"
            onChange={(e) => inputChange(e, true)}
          />
        </div>
      </div>
      <div className="text-gray-700 font-bold mb-2 w-3/4 sm:w-1/2">
        <p className="mb-3 text-center text-lg">
          {`Transfer: ${transfer} GB`}
        </p>
        <div className="flex">
          <CustomSlider 
            color="secondary"
            value={transfer}
            onChange={(e, data) => handleChangeStorage(e, data)}
            min={0}
            max={1000}
            size='medium'
            marks={marks}
          />
          <CustomTextField
            type="number"
            value={`${transfer}`}
            variant="filled" 
            size="small"
            onChange={(e) => inputChange(e)}
          />
        </div>
      </div>
    </div>
  )
}
