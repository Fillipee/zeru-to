import HeroSection from './hero-section';
import NewestRecipes from './newest-recipes';

export default function Home() {
    return (
        <div className="relative -mt-20">
            <HeroSection />

            <div className="relative bg-white pt-24">
                <NewestRecipes />
            </div>
        </div>
    );
}
