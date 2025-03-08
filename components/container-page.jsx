import { CoverParticles } from "./cover-particles";

const ContainerPage = ({ children }) => {
    return (
        <div className="w-full min-h-screen flex flex-col 
        bg-darkBg/60 bg-no-repeat">
            <CoverParticles />
            <div className="flex-1 w-full">{children}</div>
        </div>
    );
};

export default ContainerPage;
