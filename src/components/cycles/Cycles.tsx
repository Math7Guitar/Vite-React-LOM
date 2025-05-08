import styles from './styles.module.css';

export function Cycles() {
  const fCycleDotClasses = `${ styles.cycleDot } ${styles.workTime}`
  const sCycleDotClasses = `${ styles.cycleDot } ${styles.shortBreakTime}`
  const tCycleDotClasses = `${ styles.cycleDot } ${styles.workTime}`
  const foCycleDotClasses = `${ styles.cycleDot } ${styles.shortBreakTime}`
  const fifCycleDotClasses = `${ styles.cycleDot } ${styles.workTime}`
  const sixCycleDotClasses = `${ styles.cycleDot } ${styles.shortBreakTime}`
  const sevCycleDotClasses = `${ styles.cycleDot } ${styles.workTime}`
  const eCycleDotClasses = `${ styles.cycleDot } ${styles.longBreakTime}`


  return (
    <div className={ styles.cycles }>
      <span>Cycles:</span>

      <div className={ styles.cycleDots }>
        <span className={ fCycleDotClasses }></span>
        <span className={ sCycleDotClasses }></span>
        <span className={ tCycleDotClasses }></span>
        <span className={ foCycleDotClasses }></span>
        <span className={ fifCycleDotClasses }></span>
        <span className={ sixCycleDotClasses }></span>
        <span className={ sevCycleDotClasses }></span>
        <span className={ eCycleDotClasses }></span>
      </div>
    </div>
  );
}
