import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { useAppDispatch } from '../app/hooks';
import { setButtonsStorage } from "../features/serviceValues";

type Props = {
  values: string[];
  name: string,
};

const useStyles = makeStyles((theme: any) =>
  createStyles({
    smallRadioButton: {
      "& svg": {
        width: "0.5em",
        height: "0.5em"
      },
      "& .MuiFormControlLabel-label": {
        fontSize: "12px",
      },
      "&.MuiFormControlLabel-root": {
        marginRight: 0,
      }
    },
    raidoPosition: {
      // "&.MuiFormGroup-row": {
      //   justifyContent: "center",
      // }
    }
  })
);

export default function RadioButtons({ values, name }: Props) {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setButtonsStorage({ name, value: event.target.value }));
  };
  
  return (
    <RadioGroup
      row
      defaultValue={values[0]}
      name={name}
      onChange={handleChange}
      className={`${classes.raidoPosition} justify-center gap-0 sm:justify-start`}
    >
      <div className='flex flex-col justify-start sm:flex-row sm:gap-3'>
        <FormControlLabel 
          className={`${classes.smallRadioButton}`}
          value={values[0]} 
          control={<Radio />} 
          label={values[0]}
        />
        <FormControlLabel 
          value={values[1]}  
          control={<Radio />} 
          label={values[1]}  
          className={classes.smallRadioButton}
        />
      </div>
    </RadioGroup>
  )
}
