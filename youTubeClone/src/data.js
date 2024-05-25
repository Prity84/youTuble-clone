// export const API_key = 'AIzaSyDZGWpJTmmSFLu5BTcNWscqNCE6HnIJTmw';

export const API_key = "AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU";

export const value_con = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
