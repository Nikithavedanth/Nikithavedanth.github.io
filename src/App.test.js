import { act, fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('renders the portfolio and primary navigation', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /let’s make it happen/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /talk to me/i })).toHaveAttribute('href', '#contact');
  expect(screen.queryByRole('link', { name: /^mail$/i })).not.toBeInTheDocument();
});

test('about section presents an editorial biography and résumé link', () => {
  render(<App />);
  const about = document.querySelector('#about');

  expect(within(about).getByRole('img', { name: /nikitha vedant madabhushi/i })).toBeInTheDocument();
  expect(within(about).getByText(/banking, healthcare, and supply-chain platforms/i)).toBeInTheDocument();
  expect(within(about).getByText(/reliable systems\. clear, human experiences\./i)).toBeInTheDocument();
  expect(within(about).getByRole('link', { name: /download résumé/i })).toHaveAttribute('download');
  expect(within(about).getAllByRole('article')).toHaveLength(3);
});

test('cycles through professional roles in the hero', () => {
  jest.useFakeTimers();
  render(<App />);
  const profession = within(document.querySelector('.home__subtitle'));

  expect(profession.getByText('Frontend Developer')).toBeInTheDocument();

  act(() => jest.advanceTimersByTime(2800));
  expect(profession.getByText('Software Developer')).toBeInTheDocument();

  act(() => jest.advanceTimersByTime(2800));
  expect(profession.getByText('React Developer')).toBeInTheDocument();

  jest.useRealTimers();
});

test('mobile navigation closes after choosing a section', () => {
  render(<App />);
  const menuToggle = screen.getByRole('button', { name: /open navigation menu/i });

  fireEvent.click(menuToggle);
  expect(menuToggle).toHaveAttribute('aria-expanded', 'true');

  fireEvent.click(screen.getAllByRole('link', { name: /projects/i })[0]);
  expect(menuToggle).toHaveAttribute('aria-expanded', 'false');
});

test('internship cards reveal details on request', () => {
  render(<App />);
  const detailsButton = screen.getAllByRole('button', { name: /key contributions/i })[0];

  fireEvent.click(detailsButton);
  expect(detailsButton).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByText(/business banking demand deposit account/i)).toBeInTheDocument();
});

test('projects are browsable without a carousel interaction', () => {
  render(<App />);
  expect(document.querySelectorAll('.projects__card')).toHaveLength(6);
  expect(screen.getByRole('heading', { name: /supermarket sales forecasting/i })).toBeInTheDocument();
});

test('education grade tab presents grade information', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('tab', { name: /grades/i }));
  expect(screen.getByRole('tab', { name: /grades/i })).toHaveAttribute('aria-selected', 'true');
  expect(screen.getByText('3.9 GPA')).toBeInTheDocument();
  expect(screen.getByText('3.0 GPA')).toBeInTheDocument();
});

test('resume experience and certifications are represented on the site', () => {
  render(<App />);
  expect(document.querySelectorAll('.internships__card')).toHaveLength(5);
  expect(screen.getByText('Pittsburg National Corporation (Contract)')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /google data analytics professional certificate/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /secure software development lifecycle/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /ai hackathon certification/i })).toBeInTheDocument();
});
