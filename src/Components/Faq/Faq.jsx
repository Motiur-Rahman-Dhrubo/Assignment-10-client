const Faq = () => {
    return (
        <div className="mt-10">
            <h2 className="lg:text-5xl md:text-3xl text-xl font-medium text-center">Frequently Asked Questions:</h2>
            <div className="flex flex-col lg:gap-4 md:gap-3 gap-2 mt-5 lg:border lg:p-4 rounded-lg">
                {/* FAQ 1 */}
                <div className="collapse collapse-arrow shadow-md border rounded-md">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title lg:text-lg text-base font-bold">1. What is Chill Gamer?</div>
                    <div className="collapse-content">
                        <p className="text-gray-600">
                            Chill Gamer is a game review application where users can explore detailed reviews, ratings, and recommendations for various video games. Whether you're a casual player or a hardcore gamer, Chill Gamer helps you discover the best games tailored to your interests.
                        </p>
                    </div>
                </div>

                {/* FAQ 2 */}
                <div className="collapse collapse-arrow shadow-md border rounded-md">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title lg:text-lg text-base font-bold">2. How are the game ratings determined?</div>
                    <div className="collapse-content">
                        <p className="text-gray-600">
                            Game ratings on Chill Gamer are provided by our community of users and reviewers. Each review is accompanied by a star rating, allowing users to gauge the overall experience and popularity of a game quickly.
                        </p>
                    </div>
                </div>

                {/* FAQ 3 */}
                <div className="collapse collapse-arrow shadow-md border rounded-md">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title lg:text-lg text-base font-bold">3. What types of games are reviewed on Chill Gamer?</div>
                    <div className="collapse-content">
                        <p className="text-gray-600">
                            Chill Gamer features reviews for a wide variety of games, including action, adventure, RPGs, strategy, simulation, and more. We aim to provide a diverse range of game reviews for players of all genres.
                        </p>
                    </div>
                </div>

                {/* FAQ 4 */}
                <div className="collapse collapse-arrow shadow-md border rounded-md">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title lg:text-lg text-base font-bold">4. Is Chill Gamer free to use?</div>
                    <div className="collapse-content">
                        <p className="lg:text-base text-sm font-light">
                            Yes! Chill Gamer is completely free to use. You can browse game reviews, ratings, and details without any subscription or payment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
