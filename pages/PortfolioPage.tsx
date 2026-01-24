import React from 'react';
import Portfolio from '../components/Portfolio';

const PortfolioPage: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Added padding-top to account for the fixed navbar so content isn't hidden behind it */}
            <Portfolio />
        </div>
    );
};

export default PortfolioPage;
