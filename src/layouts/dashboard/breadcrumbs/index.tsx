import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import routes from '../../../App/routes';
import { NavLink } from 'react-router-dom';
import { Container, PageTitleContainer } from './style';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });
  const description: any = breadcrumbs[breadcrumbs.length - 1].match?.route;
  return (
    <Container>
      <div className="items-container">
        {breadcrumbs.map(({ match, breadcrumb }) => {
          return (
            <div className="breadcrumbs-item" key={match.pathname}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? '#283593' : 'rgba(0, 0, 0, 0.6)',
                })}
                className="breadcrumbs-link"
                key={match.pathname}
                to={match.pathname}
              >
                {breadcrumb}
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="description-container">
        {description?.description && <PageTitleContainer>{description?.description}</PageTitleContainer>}
      </div>
    </Container>
  );
};

export default Breadcrumbs;
