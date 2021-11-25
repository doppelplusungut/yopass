import { Controller, UseFormMethods } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  radioGroup: {
    justifyContent: 'center',
  },
});

export const Expiration = (props: { control: UseFormMethods['control'] }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <FormControl component="fieldset" margin="dense">
      <FormLabel component="legend">{t('expiration.legend')}</FormLabel>
      <Controller
        rules={{ required: true }}
        control={props.control}
        defaultValue="3600"
        name="expiration"
        as={
          <RadioGroup
            row
            classes={{
              root: classes.radioGroup,
            }}
          >
            <FormControlLabel
              labelPlacement="end"
              value="3600"
              control={<Radio color="primary" />}
              label={t('expiration.optionOneHourLabel')}
            />
            <FormControlLabel
              labelPlacement="end"
              value="86400"
              control={<Radio color="primary" />}
              label={t('expiration.optionOneDayLabel')}
            />
            <FormControlLabel
              labelPlacement="end"
              value="604800"
              control={<Radio color="primary" />}
              label={t('expiration.optionOneWeekLabel')}
            />
            <FormControlLabel
              labelPlacement="end"
              value="2419200"
              control={<Radio color="primary" />}
              label={t('expiration.optionFourWeekLabel')}
            />
          </RadioGroup>
        }
      />
    </FormControl>
  );
};
export default Expiration;
