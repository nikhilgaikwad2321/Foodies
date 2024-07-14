import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/mealsGrid';
import { getMeals } from '@/lib/meals';

export default async function MealPage(){
     const meals=await getMeals();

    return <>
        <header className={classes.header}>
            <h1>
                Delicious meals,created{' '}
                <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favourite recipe and cook it yourself.It is easy and fun</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                Share Your Fovourite Recipes
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <MealsGrid meals={meals}/>
        </main>
    </>
}